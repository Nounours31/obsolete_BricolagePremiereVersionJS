'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-18 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-648';
    this._commitGIT = '4f3eca28638c78f93b03c197b94f28b867ef6339';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}