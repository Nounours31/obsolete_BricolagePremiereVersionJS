'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-25 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1283';
    this._commitGIT = 'c86bf8c26bcd78ebdec61f9a9e4e5732dea60a23';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}