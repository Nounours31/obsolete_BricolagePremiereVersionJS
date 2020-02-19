'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-19 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1021';
    this._commitGIT = '3ac4232a4e1783a66bf73431b67242a4b1e66780';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}