'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-05 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-597';
    this._commitGIT = '4a86ef7695e5e21c324fc4167b6926b5eccb0ad9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}