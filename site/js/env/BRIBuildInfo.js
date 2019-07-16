'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-16 12:00:13';
    this._versionBuild = 'jenkins-Bricolage-148';
    this._commitGIT = 'f254f2f112510303e3be72a76f98fd8088b38ed8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}