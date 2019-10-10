'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-10 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-491';
    this._commitGIT = 'dd80b993e4dcbc293228aba9b5808fc77a6157e1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}