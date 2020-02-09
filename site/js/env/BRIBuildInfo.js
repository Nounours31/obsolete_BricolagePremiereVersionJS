'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-09 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-981';
    this._commitGIT = '3fb2981bdfbcedaee4270b2a8184fc748db1cbcd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}