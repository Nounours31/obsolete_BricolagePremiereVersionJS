'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-12 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-256';
    this._commitGIT = '6de5978c278464e8f71e6b253ccf15ba4902c560';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}