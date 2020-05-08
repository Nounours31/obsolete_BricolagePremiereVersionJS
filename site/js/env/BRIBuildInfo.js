'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-08 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1337';
    this._commitGIT = 'c0c976c7ff469505823e4f7c0337739bc2bc3db0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}