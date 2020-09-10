'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-10 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1837';
    this._commitGIT = '97f31cf0a7f7ce95ff07bfc1845fc007af811881';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}