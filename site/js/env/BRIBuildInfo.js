'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-11 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-990';
    this._commitGIT = '750206b6fc01b8040764dbdf6b3e9248efce8f10';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}