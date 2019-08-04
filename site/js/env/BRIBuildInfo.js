'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-04 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-223';
    this._commitGIT = '1cd0efd8b10abee4ad76dac9d51079ac753e1840';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}