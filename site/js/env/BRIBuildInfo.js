'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-01 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2044';
    this._commitGIT = '6ced9adf102e3ca3a8f6cc89a7507e8f1678130d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}