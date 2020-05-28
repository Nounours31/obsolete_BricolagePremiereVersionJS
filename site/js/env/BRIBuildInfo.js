'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-28 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1415';
    this._commitGIT = '98752c3f8d818464a0bc68ecbd9f2ab792e1c80c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}