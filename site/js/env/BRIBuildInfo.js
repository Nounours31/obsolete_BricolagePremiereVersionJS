'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-12 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1475';
    this._commitGIT = 'a635923c49e24cf88a442c3ef8a16eb3e151dd47';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}