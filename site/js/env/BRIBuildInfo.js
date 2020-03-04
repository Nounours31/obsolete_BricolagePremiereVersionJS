'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-04 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1078';
    this._commitGIT = '26b615b92226c509686fb759d5704229754b4899';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}