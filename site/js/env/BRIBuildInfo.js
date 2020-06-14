'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-14 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1486';
    this._commitGIT = '61e33a0097f4cdba71aabd91f93fe5ad78be6893';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}